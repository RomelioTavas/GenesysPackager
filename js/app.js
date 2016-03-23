
function log(str){
  $("#CmdOutput").append("<p>"+str+"</p>");
}


function generatePakArguments(cookedPath,projectName,assetType){
  var fs = require('fs');

  var argContainer = '';
  //Generate Pak Args for mesh assets
  var cookedAssetPath = cookedPath + "\\" + assetType;
  var cookedAssets;

  try {
    cookedAssets = fs.readdirSync(cookedAssetPath);
  }
  catch (e) {
    log(e);
    return;
  }

  for(var i=0;i<cookedAssets.length;i++){
    log("Processing: " + cookedAssets[i]);
    var sourceDir = "\"" + cookedAssetPath + "\\" + cookedAssets[i] + "\"";
    var mountPoint = "\"" + "../../../Genesys/Content/" + projectName + "/"+ assetType +"/" + cookedAssets[i] + "\"";
    argContainer = argContainer + sourceDir + " " + mountPoint + "\r\n";
  }
  return argContainer;
}

function processStaticMesh(cookedPath,projectName){
  var toWrite = '';

  log("Processing Mesh Assets");
  toWrite = toWrite + generatePakArguments(cookedPath,projectName,"Meshes");

  log("Processing Materials");
  toWrite = toWrite + generatePakArguments(cookedPath,projectName,"Materials");

  log("Processing Textures");
  toWrite = toWrite + generatePakArguments(cookedPath,projectName,"Textures");

  console.log("write"+toWrite);
  return toWrite;
}

$(document).ready(function () {
  $("#CurrBinDir").append(localStorage.UEBinDir);
  if(localStorage.UEBinDir != undefined){
      $("#UEBinDir").hide();
      $("#BinLbl").hide()
      $("#UEBinDir")[0].nwworkingdir = localStorage.UEBinDir;
  }

  $("#UEBinDir").on("change",function(){
    localStorage.UEBinDir = this.value;
  });

  $("#Package").on("click",function(){

    //Validate Output Directory
    var outputDir = $('#OutputDir').val();
    if(outputDir == "" || outputDir == undefined ){
      return alert("You must select an output directory");
    }

    //Validate Project Directory
    var projectDir = $('#ContentProject')[0].value;
    if(projectDir == '' || projectDir == undefined){
      return alert("You must select your content project");
    }

    //Get Package Type
    var packageType = $("#PackageType")[0].value;

    //Infer project name from project directory
    var projectName = projectDir.split("\\").slice(-1)[0];
    log(projectName);

    //Create temporary file to hold UnrealPak args
    var fs = require('fs');
    fs.open('./tmp/pakArgs.txt','w',function(err,fd){
      if(err){
        return alert(err);
      }
      var cookedPath = projectDir + "\\Saved\\Cooked\\WindowsNoEditor\\" + projectName + "\\Content\\" + projectName;
      var toWrite = processStaticMesh(cookedPath,projectName);

      //Write Unreal Pak Args
      fs.write(fd,toWrite,function(err,written,string){
        if(err){
          return alert(err);
        }

        fs.close(fd,function(){
          var path = require('path');
          var pakArgsDir = path.resolve('./tmp','pakArgs.txt');
          var saveDir = outputDir + "\\" + projectName + ".pak";

          log("Running UnrealPak.exe");
          var unrealPakDir = "\"" + path.resolve(localStorage.UEBinDir,"UnrealPak.exe") + "\"";
          //Pak Args creation success, call UnrealPak.exe
          var exec = require('child_process').exec;
          var cmd = unrealPakDir  + " " + saveDir + " -Create=" + pakArgsDir;
          exec(cmd, function(err, stdout, stderr) {
            if(err){
              log(err);
              return alert(err);
            }
            else{
              log("Packaging Success: " + saveDir);
              alert("Packaging Success: " + saveDir);
            }
          });
        });
      });
    });
  });
});
