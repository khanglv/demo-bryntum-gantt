import _, { String } from "lodash";

const optimizeData = (array: any) => {
  const result = array.reduce(function (rv: any, x: any) {
    (rv[x["subcon_code"]] = rv[x["subcon_code"]] || []).push(x);
    return rv;
  }, {});
  return result;
};

function rootNode(node: any[]): any[] {
  const byAtt = _.groupBy(node, "activity_ref");

  const rootNode2 = (arr: any = [], level: number = 0) => {
    if (level >= 2) {
      return arr;
    }

    const byParrent: any = _.chain(arr)
      .groupBy("parent_activity")
      .map((data, key: string) => {
        return {
          original_activity: byAtt[key]?.[0],
          children: rootNode2(data, level + 1),
        };
      })
      .filter((item) => !!item.original_activity)
      .value();

    return byParrent;
  };

  const resp = rootNode2(node, 0);
  console.log(">>>byParrent", resp);

  return resp;
}

export { optimizeData, rootNode };
