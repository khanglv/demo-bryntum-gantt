import { Column, ColumnStore } from "@bryntum/gantt";

class OriginalDuarationColumn extends Column {
  static get $name() {
    return "OriginalDuarationColumn";
  }

  static get type() {
    return "originalduarationcolumn";
  }

  static get isGanttColumn() {
    return true;
  }

  static get defaults() {
    return {
      // Set your default instance config properties here
      field: "priority",
      text: "Priority",
      flex: 1,
      filterable: {
        filterField: {
          type: "combo",
          multiSelect: true,
          valueField: "priority",
          displayField: "priority",
          items: ["Low", "Medium", "High"],
        },
        filterFn: ({ record, value }: { record: any; value: any }) =>
          !value.length || value.includes(record),
      },
    };
  }

  renderer({ record }: { record: any }) {
    const { originalData } = record;
    return originalData.priority
      ? [capitalizeFirstLetter(originalData.priority.toLowerCase())]
      : "";
  }
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

ColumnStore.registerColumnType(OriginalDuarationColumn);
