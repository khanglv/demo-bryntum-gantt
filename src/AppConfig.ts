/**
 * Application configuration
 */
import { BryntumGanttProps } from '@bryntum/gantt-react';

const ganttConfig: BryntumGanttProps = {
    project: {
        autoLoad: true,
        transport: {
            load: {
                url: 'data/launch-saas.json'
            }
        },
        
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    },
    columns: [{ type: 'name', field: 'name', width: 250 }],
    viewPreset: 'weekAndDayLetter',
    barMargin: 10
};

export { ganttConfig };
