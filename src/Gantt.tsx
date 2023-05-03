import React, { useEffect, useState } from "react";
import { BryntumGantt, BryntumGanttProps } from "@bryntum/gantt-react";
import "./common/GanttToolbar";
import Task from "./common/Task";
import { columns } from "./common/columns";
import { useFetchJson } from "./utillity/hook";
import LoadingSpinner from "./common/loading";
import { optimizeData, rootNode } from "./utillity";

// ,
// { type : 'startdate' },
// { type : 'duration' },
// { type : 'resourceassignment', width : 120, showAvatars : true },
// { type : 'percentdone', showCircle : true, width : 70 },
// {
//     type  : 'predecessor',
//     width : 112
// },
// {
//     type  : 'successor',
//     width : 112
// },
// { type : 'schedulingmodecolumn' },
// { type : 'calendar' },
// { type : 'constrainttype' },
// { type : 'constraintdate' },
// { type : 'statuscolumn' },
// { type : 'deadlinedate' },
// { type : 'addnew' }

export default function Gantt() {
  const data = useFetchJson([
    "data/data-page-0.json",
    "data/data-page-2.json",
    "data/data-page-3.json",
    "data/data-page-4.json",
    "data/data-page-5.json",
  ]);

  const [delayed, setDelayed] = useState<boolean>(true);
  const [dataGantt, setDataGantt] = useState<any>();

  useEffect(() => {
    if (data && data?.length) {
      const dataTmp = rootNode(data);
      setDataGantt(dataTmp);
      setDelayed(false);
    }
  }, [data]);

  const ganttConfig: BryntumGanttProps = {
    project: {
      autoLoad: true,
      // tasksData: dataGantt, handle dataa
      transport: {
        load: {
          url: "data/launch-saas.json",
        },
      },
      taskModelClass: Task,
      hoursPerDay: 24,
      daysPerWeek: 5,
      daysPerMonth: 20,
      validateResponse: true,
      taskStore: {
        wbsMode: "auto",
      },
    },
    columns: columns,
    taskMenuFeature: {
      items: {
        indent: false,
        outdent: false,
        convertToMilestone: false,
      },
    },
    viewPreset: {
      base: "weekAndDay",
      displayDateFormat: "YYYY-MM-DD",
    },
    barMargin: 10,
    headerMenuFeature: true,
    minHeight: 1200,
    autoHeight: true,
    //   @ts-ignore
    tbar: { type: "gantttoolbar" },
  };

  return delayed ? <LoadingSpinner /> : <BryntumGantt {...ganttConfig} />;
}
