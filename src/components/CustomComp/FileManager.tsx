import { useState } from "react";
import {FileManager} from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";
import './FileManager.css'

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";


function getCurrentTime() {
  return new Date().toISOString();
}


function ReactFileManager() {



const docs = [
  { uri: "" },
];

  const [files, setFiles] = useState([
    {
      name: "Documents",
      isDirectory: true, // Folder
      path: "/Documents", // Located in Root directory
      updatedAt: "2024-09-09T10:30:00Z", // Last updated time
    },
    {
      name: "Pictures",
      isDirectory: true,
      path: "/Pictures", // Located in Root directory as well
      updatedAt: "2024-09-09T11:00:00Z",
    },
    {
      name: "Pic.png",
      isDirectory: false, // File
      path: "/Pictures/Pic.png", // Located inside the "Pictures" folder
      updatedAt: "2024-09-08T16:45:00Z",
      size: 2048, // File size in bytes (example: 2 KB)
    },
  ]);

const onPaste = (filesToPaste, destinationFolder, operationType) => {
  if (operationType === 'copy') {
  setFiles(prevFiles => {
    let newFiles = [...prevFiles];

    filesToPaste.forEach(item => {
      if (item.isDirectory) {

        const subItems = prevFiles.filter(f => f.path.startsWith(item.path));

        subItems.forEach(sub => {

          const relativePath = sub.path.replace(item.path, "");
          const newPath =
            destinationFolder === null
              ? `/${item.name}${relativePath}`
              : `${destinationFolder.path}/${item.name}${relativePath}`;

          // SAFETY CHECK: skip if path already exists
          if (!prevFiles.some(f => f.path === newPath)) {
            const newEntry = {
              ...sub,
              path: newPath,
              updatedAt: getCurrentTime(),
            };
            newFiles.push(newEntry);
          }
        });
      } else {

        const newPath =
          destinationFolder.path === "/"
            ? `${destinationFolder.path}${item.name}`
            : `${destinationFolder.path}/${item.name}`;

        // SAFETY CHECK: skip if path already exists
        if (!prevFiles.some(f => f.path === newPath)) {
          const newEntry = {
            ...item,
            path: newPath,
            updatedAt: getCurrentTime(),
          };
          newFiles.push(newEntry);
        }
      }
    });

  return newFiles;
});
}
  else if(operationType==="move") {
    console.log("moved")
    console.log(filesToPaste)
    
    setFiles(prevFiles => {
    let newFiles = [...prevFiles];

    filesToPaste.forEach(item => {
      // Get the item itself plus all sub-items if folder
      const itemsToMove = item.isDirectory
        ? prevFiles.filter(f => f.path === item.path || f.path.startsWith(item.path + "/"))
        : [item];

      itemsToMove.forEach(subItem => {
        // Compute new path
        const relativePath = item.isDirectory
          ? subItem.path.replace(item.path, item.name) // preserve folder hierarchy
          : subItem.name;

        const newPath = destinationFolder
          ? `${destinationFolder.path}/${relativePath}`
          : `/${relativePath}`;

        // Safety: skip if path already exists
        if (!prevFiles.some(f => f.path === newPath)) {
          newFiles.push({
            ...subItem,
            path: newPath,
            updatedAt: getCurrentTime(),
          });
        }
      });
    });



    return newFiles;
  });
  }

  else {

    setFiles(prevFiles => {
      const newFiles = cutClipboard.map(item => {
        let newPath: string;

        if (destinationFolder === null) {

          newPath = item.path;
        } else {
          if (item.path.startsWith(destinationFolder.path)) {

            newPath = item.path;
          } else {

            const topLevelFolder = cutClipboard.find(
              cutItem =>
                cutItem.isDirectory &&
                item.path.startsWith(cutItem.path)
            );

            const relativePath = topLevelFolder
              ? item.path.replace(topLevelFolder.path, topLevelFolder.name)
              : item.name;

            newPath = `${destinationFolder.path}/${relativePath}`;
          }
        }

        // SAFETY CHECK: skip if path already exists
        if (prevFiles.some(f => f.path === newPath)) {
          return null; 
        }

        return {
          ...item,
          path: newPath,
          updatedAt: getCurrentTime(),
        };
      })
      .filter((f): f is typeof f => f !== null); 

      return [...prevFiles, ...newFiles];
    });

    setClipboard([]);
  }

};

const [cutClipboard, setClipboard] = useState(null);

  const onCut = (filesToCut) => {
    const toCut = files.filter(file =>
      filesToCut.some(item =>
        item.isDirectory
          ? file.path === item.path || file.path.startsWith(item.path + "/")
          : file.path === item.path
      )
    );

    setClipboard(toCut);

    setFiles(prevFiles =>
      prevFiles.filter(file =>
        !toCut.some(cutItem => cutItem.path === file.path)
      )
    );
  };



  const onCreateFolder = (folderName, parentPath ) =>{
    const newFolder = {
    name: folderName,
    isDirectory: true,
    path: parentPath === null? '/' +folderName: parentPath.path + '/' + folderName,
    updatedAt: getCurrentTime(),
    size: 0,
  };

  setFiles(prevFiles => [...prevFiles, newFolder]);
  }
  

  const onDelete = (deletedFile) =>{
    setFiles(prevFiles =>
    prevFiles.filter(file =>
      !deletedFile.some(deletedFile => {
        if (deletedFile.isDirectory) {
          // delete folder and everything inside
          return file.path.startsWith(deletedFile.path);
        }
        // delete only the exact file
        return (
          deletedFile.name === file.name &&
          deletedFile.path === file.path &&
          deletedFile.isDirectory === file.isDirectory
        );
      })
    )
  );
  }

  const onRename = (itemToRename: FileItem, newName: string) => {
    setFiles(prevFiles => {
      const oldPath = itemToRename.path;
      // Compute the parent path (everything before last "/")
      const parentPath = oldPath.substring(0, oldPath.lastIndexOf("/"));
      const newPath = parentPath ? `${parentPath}/${newName}` : `/${newName}`;

      return prevFiles.map(file => {
        if (file.path === oldPath) {
          // Update the renamed item itself
          return {
            ...file,
            name: newName,
            path: newPath,
            updatedAt: getCurrentTime(),
            isEditing: false, // optional: reset editing state
          };
        } else if (file.path.startsWith(oldPath + "/")) {
          // Update paths of sub-items
          const newSubPath = file.path.replace(oldPath, newPath);
          return {
            ...file,
            path: newSubPath,
            updatedAt: getCurrentTime(),
          };
        }
        return file;
      });
    });
  };

  const onError = () =>{

  }  

  const onRefresh = () =>{

  }

  const onFileUploaded = () =>{

  }

  const onDownload = () =>{
    
  }



const CustomImagePreviewer = ({ file }) => {
  return <DocViewer
      documents={docs}
      initialActiveDocument={docs[1]}
      pluginRenderers={DocViewerRenderers}
    />;
};

  return (
    <>
    {/* <button onClick={()=>{
      console.log(files)

    }}>show</button> */}
      <FileManager 
      className=''
      style={{height:'800px'}}

      files={files} 
      filePreviewComponent={(file) => <CustomImagePreviewer file={file} />}
      isLoading={false}
      // primaryColor='#271549'

      onCreateFolder={onCreateFolder}
      onDelete={onDelete}
      onPaste={onPaste}
      onCut={onCut}
      onRename={onRename}
      />
    </>
  );
}

export default ReactFileManager;