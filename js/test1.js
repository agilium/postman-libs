(id) => {
pm.test('Data is okay', function(){
   pm.response.to.have.jsonBody("data.id", id)
   console.log(jsonBody.data.id)
});
}
