# GenesysPackager
Packages Unreal Engine's Cooked Assets for the Genesys Platform

## How to use
### Create a UE4 Project
1. Create an Unreal Engine Blank Blueprint Project. Don't include Starter Content.
2. In the Content Browser, create a folder named "Downloads" under the content directory
3. Under Downloads, create a folder named Materials. This folder will contain all of your asset materials.
4. Import an FBX file by either dragging it to the content browser or by using the right-click context menu.
5. Move all the imported materials to the materials folder.
6. Your project directory structure as seen in the content browser must be like this:
```
-Content  
--Downloads  
---Your_Asset.uasset  
---Materials  
----Your_Asset_Material.uasset
```
### Package it!
7. Navigate to File -> Cook Content For Windows
8. Run the genesys-packager.exe. Make sure you've downloaded the latest release: [https://github.com/RomelioTavas/GenesysPackager/releases]
9. Name your package 
10. Target your Unreal Engine 4 binaries directory. `Ex. C:\Program Files\Epic Games\4.10\Engine\Binaries\Win64`
11. Select all of your cooked assets. Cooked Assets are found at `<YOUR_PROJECT_DIR>\Saved\Cooked\WindowsNoEditor\GenesysContent\Content\Downloads`
12. Select all of your cooked materials. Cooked Materials are found at `<YOUR_PROJECT_DIR>\Saved\Cooked\WindowsNoEditor\GenesysContent\Content\Downloads\Materials`
13. Package!
14. Your package will be available in the same directory as the packager. Output file will be YOUR_PACKAGE_NAME.pak
