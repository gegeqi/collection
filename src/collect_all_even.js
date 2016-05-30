
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var collection_a ;
var collection_b;
for (var j = 0;j<collection_b.value.length;j++){
 for (var i=0;i<collection_a.length;i++){
	var col_a=collection_a[i].key;
	 if(collection_b.value[j]=collection_a[i].key){
    return collection_a[i]key;
   }
}

}
}

module.exports = collect_same_elements;
