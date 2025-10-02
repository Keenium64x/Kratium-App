import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";

type File = {
  name: string;
  isDirectory: boolean;
  path: string;
  updatedAt?: string; // Optional: Last update timestamp in ISO 8601 format
  size?: number; // Optional: File size in bytes (only applicable for files)
};


export const Route = createFileRoute('/FileManager')({
  component: RouteComponent,
})

function RouteComponent() {
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

  return (
    <div className='h-full p-2'>
      <FileManager files={files} className='bg-[#110E13]'/>
    </div>
  );
}
