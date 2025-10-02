
import { useEffect, useRef, useState } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";
import './Gantt.css'


const Gantt = () => {



  const ganttContainer = useRef<HTMLDivElement>(null);

  const tasks = {
      data: [
        { id: 1, text: "Task #1", start_date: "2025-10-02", duration: 3, priority: 2, owner: "Keenan", progress: 0.6 },
        { id: 2, text: "Task #2", start_date: "2025-10-05", duration: 4, progress: 0.4 },
        { id: 3, text: "Task #3", start_date: "2025-10-05", duration: 5, progress: 0.4 },
      ],
      links: [{ id: 1, source: 1, target: 2, type: "0" }],
    }




  useEffect(() => {
    if (!ganttContainer.current) return;



    gantt.plugins({
    click_drag: true,
    drag_timeline: true,
    export_api: true,
    fullscreen: true,
    multiselect: true,
    quick_info: true,
    undo: true,
    marker: true,    
    });

    


  // gantt.config.columns = [
  //   { name: "text", label: "Task name", tree: true, width: "*" },
  //   { name: "start_date", label: "Start date", align: "center" },
  //   { name: "duration", label: "Duration", align: "center" },
  //   { name: "priority", label: "Priority", width: 80 }, // custom field
  //   { name: "owner", label: "Owner", width: 100 },      // custom field
  // ];

  // gantt.config.lightbox.sections = [
  //   { name: "description", height: 50, map_to: "text", type: "textarea", focus: true },
  //   { name: "priority", height: 30, map_to: "priority", type: "select", options: [
  //       { key: "High", label: "High" },
  //       { key: "Medium", label: "Medium" },
  //       { key: "Low", label: "Low" },
  //     ] },
  //   { name: "owner", height: 30, map_to: "owner", type: "text" },
  // ];



    gantt.init(ganttContainer.current);
    gantt.skin = "Meadow";
    gantt.parse(tasks);


    const dp = gantt.createDataProcessor((entity, action, data, id) => {
      //Make server calls and set JSON state
      console.log(entity);
      console.log(action);
      console.log(data);
      console.log(id);
});
    

  }, []);



 
  
  return (
    <>
      {/* <button onClick={() =>{
    //     gantt.clearAll();
    //     gantt.parse({
    //   data: [
    //     { id: 1, text: "Task #1", start_date: "2025-10-02", duration: 3, priority: 2, owner: "Keenan", progress: 0.6 },
    //     { id: 2, text: "Task #2", start_date: "2025-10-05", duration: 4, progress: 0.4 },
    //   ],
    //   links: [{ id: 1, source: 1, target: 2, type: "0" }],
    // })

        // if (!gantt.getState().fullscreen) {
        //     // expanding the gantt to full screen
        //     gantt.expand();
        // }
        // else {
        //     // collapsing the gantt to the normal mode
        //     gantt.collapse();
        // }
      }}>FullScreen</button> */}
      <div ref={ganttContainer} style={{ width: "100%", height: "800px" }} />
    </>
  )
};

export default Gantt;