# GenesysPackager
Packages Unreal Engine's Cooked Assets for the Genesys Platform

## How to use
### Create a UE4 Project
1. Create an Unreal Engine Blank Blueprint Project. Don't include Starter Content.
2. Choose a unique and descriptive name for your project. Ex. FantasyHouses
3. In the Content Browser, under the Content folder, create a folder named after your project name.
4. Under the folder you created in step 3, create the following folders
 - For Static Meshes
  - Meshes
  - Materials
  - Textures
 - For Skeletal Meshes
  - SkeletalMeshes
  - Animations - We only support Animation Sequences for now
  - Materials
  - Textures
  - PhysicsAssets
  - Skeletons
 - For Sound Assets
  - Audio - WAV files go here

5. Import an FBX file by either dragging it to the content browser or by using the right-click context menu.
6. Move each file to its appropriate directory.
7. Your project directory structure as seen in the content browser should be like this:
```
-Content  
--FantasyHouses  
---Meshes
----House01.uasset
---Materials
----House01_Mat.uasset
---Textures
----House01_Texture.uasset
```
### Package it!
8. Navigate to File -> Cook Content For Windows
9. Run the genesys-packager.exe. Make sure you've downloaded the latest release: [https://github.com/RomelioTavas/GenesysPackager/releases]
10. Target your Unreal Engine 4 binaries directory. `Ex. C:\Program Files\Epic Games\4.11`
11. Target your UE4 Project.
12. Package!
13. Your package will be available in the same directory as the packager. Output file will be PROJECT_NAME.pak
