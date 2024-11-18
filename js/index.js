var  siteNameInput = document.getElementById('SiteName')
var  siteUrlInput = document.getElementById('SiteUrl')
var siteList =[]
if(localStorage.getItem("BooKey") !== null){
    siteList=JSON.parse(localStorage.getItem("BooKey"))
    displayBook()
}
function sumbitBook(){

 if(validationSiteUrl()&& validationSiteUrl()){
    siteObject ={
        siteName: siteNameInput.value,
        siteUrl:siteUrlInput.value,
      }
      siteList.push(siteObject)
      localStorage.setItem("BooKey",JSON.stringify(siteList))
      displayBook()
      clear()
      console.log( siteList)
 }
 else{
  var modelSumbit  = `
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
   <div class="modal-header border-0 d-flex justify-content-between align-items-center ">
         <ul class=" d-flex  list-unstyled ">
      <li class="first "><i class="fa-solid fa-circle"></i></li>
      <li class="second"><i class="fa-solid fa-circle"></i></li>
      <li class="third"><i class="fa-solid fa-circle"></i></li>
    
</ul>
        <button type="button" class="btn-close mb-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    
    <div class="modal-body px-4">
    <p>  Site Name or Url is not valid, Please follow the rules below :</p>
    <h4><i class="fa-regular fa-circle-right p-2"></i>Site name must contain at least 3 characters</h4>
    <h4><i class="fa-regular fa-circle-right p-2"></i>Site URL must be a valid one</h4>


    </div>
    
  </div>
</div>
</div> 
   `
   document.getElementById("btns").innerHTML=modelSumbit
 }
 siteNameInput.classList.remove("is-invalid")
 siteNameInput.classList.remove("is-valid")
 siteUrlInput.classList.remove("is-invalid")
 siteUrlInput.classList.remove("is-valid")
}

function displayBook(){
    var cartona=""
    for(var i=0;i<siteList.length;i++){
       
    cartona+=`
         <tr>
         <td>${i+1}</td>

            <td>${siteList[i].siteName}</td>
            <td >  <button  id="btnVisit"  > <a href="${siteList[i].siteUrl}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit </a></button>
 </td>
            <td> <button id="btnDelete" type="button" onclick="deleteBook(${i})" ><i class="fa-solid fa-trash-can"></i> Delete</button></td>
          </tr>
 `
    }
    document.getElementById('demo').innerHTML=cartona
    
}
function clear(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}
function deleteBook(index){
    siteList.splice(index,1)
   localStorage.setItem("BooKey",JSON.stringify(siteList))
   displayBook()

}
function validationSiteName(){
    var regex = /^\w{3,}(\s+\w+)*$/;
    var myStr =siteNameInput.value;
     if(regex.test(myStr)){
      siteNameInput.classList.add("is-valid")
      siteNameInput.classList.remove("is-invalid")
      
      return true
     
     }
     
     else{
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
        return false
     }
}

function validationSiteUrl(){
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var myStr =siteUrlInput.value;
     if(regex.test(myStr)){
        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
        return true
     }
     else{
        siteUrlInput.classList.add("is-invalid")
        siteUrlInput.classList.remove("is-valid")
        return false

     }
}

