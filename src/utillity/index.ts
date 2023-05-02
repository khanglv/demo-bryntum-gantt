
const optimizeData = (array: any) => {
    const result = array.reduce(function(rv: any, x: any) {
        (rv[x['subcon_code']] = rv[x['subcon_code']] || []).push(x);
        return rv;
      }, {});
      return result
}

export {optimizeData}