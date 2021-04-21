export function displayUniqueFilters(array){
    var flags = {};
    var newFilter = array.filter((filterPresent) =>  {
        if (flags[filterPresent.value]) {
            return false;
        }
        flags[filterPresent.value] = true;
  
        return true;
    });
  
    return newFilter;
   }