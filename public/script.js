var requiredfields = [
  "fname", "title"
]
var favbook = {
  "project" : "Book",
  "owner" : "Kristina Sukiasyan",
  "fname" : "",
  "title" : "",
  "author" : "",
  "colour" : "",
  "covertype" : "",
  "othercovervalue" : "",
  "npages" : "",
  "price" : "",
  "currency" : "",
  "language" : "",
  "otherlanguagevalue" : "",
  "originallanguage" : "",
  "otherlanguagevalue2" : "",
  "edition" : "",
  "dimensions" : "",
  "publisher" : "",
  "publishingdate" : "",
  "originalpublishingdate" : "",
  "genre" : "",
  "age" : "",
}

function printfnamevalue() {
  favbook.fname = document.getElementById("fname").value;
}

function printtitlevalue() {
  favbook.title = document.getElementById("title").value;
}

function printauthorvalue() {
  favbook.author = document.getElementById("author").value;
}

function printcolourvalue() {
  favbook.colour = document.getElementById("colour").value;
}

function printcovertypevalue(e){
 favbook.covertype= e.target.value; 
 if (favbook.covertype !="othercover"){
   favbook.othercovervalue="";
   document.getElementById("othercovervalue").style.display="none";
 } else{
   document.getElementById("othercovervalue").style.display="block";
 }
}

function printothercovervalue(){
if(favbook.covertype="othercover"){document.getElementById("othercovervalue").style.display="block";
 favbook.othercovervalue=document.getElementById("othercovervalue").value;
}
}

function printnpagesvalue() {
  favbook.npages = document.getElementById("npages").value;
}

 function printpricevalue() {
  favbook.price = document.getElementById("price").value;
}

function printcurrencyvalue() {
  favbook.currency = document.getElementById("currency").value;
}

function printlanguagevalue(e){
 favbook.language= e.target.value; 
 if (favbook.language !="otherlanguage"){
   favbook.otherlanguagevalue="";
   document.getElementById("otherlanguagevalue").style.display="none";
 } else{
   document.getElementById("otherlanguagevalue").style.display="block";
 }
}

function printotherlanguagevalue(){
if(favbook.language="otherlanguagevalue"){ document.getElementById("otherlanguagevalue").style.display = "block";
 favbook.otherlanguagevalue=document.getElementById("otherlanguagevalue").value;
}
}

function printoriginallanguagevalue(e){
 favbook.originallanguage= e.target.value; 
 if (favbook.originallanguage !="otherlanguage2"){
   favbook.otherlanguagevalue2="";
   document.getElementById("otherlanguagevalue2").style.display="none";
 } else{
   document.getElementById("otherlanguagevalue2").style.display="block";
 }
}

function printotherlanguagevalue2(){
if(favbook.originallanguage="otherlanguage2"){document.getElementById("otherlanguagevalue2").style.display = "block";
 favbook.otherlanguagevalue2=document.getElementById("otherlanguagevalue2").value;
}
}

function printeditionvalue() {
  favbook.edition = document.getElementById("edition").value;
}

function printdimensionsvalue() {
  favbook.dimensions = document.getElementById("dimensions").value;
}

function printpublishervalue() {
  favbook.publisher = document.getElementById("publisher").value;
}

function printpublishingdatevalue() {
  favbook.publishingdate = document.getElementById("publishingdate").value;
}

function printoriginalpublishingdatevalue() {
  favbook.originalpublishingdate = document.getElementById("originalpublishingdate").value; 
}  

function printgenrevalue() {
  favbook.genre = document.getElementById("genre").value; 
}  

function printagevalue() {
  favbook.age = document.getElementById("age").value; 
}  
 
var requiredfieldsfootball = [
  "fname", "title"
]
var myhobby = {
  "project" : "hobby",
  "owner" : "Kristina Sukiasyan",
  "fname" : "",
  "duration" : "",
  "spendtime" : "",
  "longestspendtime" : "",
  "position" : "",
  "favclub" : "",
  "favnationalteam" : "",
  "favleague" : "",
  "otherfavleaguevalue" : "",
  "competition" : "",
  "othercompetitionvalue" : "",
  "favgoalkeeper" : "",
  "favdefender" : "",
  "favmidfielder" : "",
  "favforward" : "",
  "favcoach" : "",
}

function printfnamevalue() {
  myhobby.fname = document.getElementById("fname").value;
}

function printdurationvalue() {
  myhobby.duration = document.getElementById("duration").value;
}

function printspendtimevalue() {
  myhobby.spendtime = document.getElementById("spendtime").value;
}

function printlongestspendtimevalue() {
  myhobby.longestspendtime = document.getElementById("longestspendtime").value;
}


function printpositionvalue(e){
 myhobby.position = e.target.value;
  if(myhobby.position == "goalkeeper") {
    myhobby.position = document.getElementById("goalkeeper").value;
  }
  else if(myhobby.position == "defender"){
    myhobby.position = document.getElementById("defender").value;
  }
  else if(myhobby.position == "midfielder") {
    myhobby.position = document.getElementById("midfielder").value;
  }
  else if(myhobby.position == "forward") {
    hobbyTennis.favtournament = document.getElementById("frenchopen").value;
  }
}


function printfavclubvalue() {
  myhobby.favclub = document.getElementById("favclub").value;
}


function printfavnationalteamvalue() {
  myhobby.favnationalteam = document.getElementById("favnationalteam").value;
}

function printfavleaguevalue(e) {
  myhobby.favleague = e.target.value;
  if (myhobby.favleague != "otherfavleague") {
    myhobby.otherfavleaguevalue = ""; document.getElementById("otherfavleaguevalue").style.display = "none";
  } else {document.getElementById("otherfavleaguevalue").style.display = "block";
  myhobby.otherfavleaguevalue = document.getElementById("otherfavleaguevalue").value
  }
}

function printotherfavleaguetextvalue() {
  if (myhobby.favleague == "otherfavleague") {document.getElementById("otherfavleaguevalue").style.display = "block";
    myhobby.otherfavleaguevalue = document.getElementById("otherfavleaguevalue").value;
  }
}

function printcompetitionvalue(e) {
  myhobby.competition = e.target.value;
  if (myhobby.competition != "othercompetition") {
    myhobby.othercompetitionvalue = ""; document.getElementById("othercompetitionvalue").style.display = "none";
  } else {document.getElementById("othercompetitionvalue").style.display = "block";
  myhobby.othercompetitionvalue = document.getElementById("othercompetitionvalue").value
  }
}

function printothercompetitiontextvalue() {
  if (myhobby.competition == "othercompetition") {document.getElementById("othervompetitionvalue").style.display = "block";
    myhobby.othercompetitionvalue = document.getElementById("othercompetitionvalue").value;
  }
}

function printfavgoalkeepervalue() {
  myhobby.favgoalkeeper = document.getElementById("favgoalkeeper").value;
}

function printfavdefendervalue() {
  myhobby.favdefender = document.getElementById("favdefender").value;
}

function printfavmidfieldervalue() {
  myhobby.favmidfielder = document.getElementById("favmidfielder").value;
}

function printfavforwardvalue() {
  myhobby.favforward = document.getElementById("favforward").value;
}

function printfavcoachvalue() {
  myhobby.favcoach = document.getElementById("favcoach").value;
}






function validateFormData() {
  var isFormValid = true;
  var keys = Object.keys(favbook);
  keys.forEach(key => {
      if (requiredfields.indexOf(key) > -1 && favbook[key] == "") { console.log(key, " is a required field, please add a value") 
      if (requiredfieldsfootball.indexOf(key) > -1 && myhobby[key] == "") { console.log(key, " is a required field, please add a value")
      if(document.getElementById(key)) {
        document.getElementById(key).style.backgroundColor = "plum"; 
        isFormValid = false;
          }
        } 
    }  
  })
  return isFormValid;
}

function saveBookData(e) {
e.preventDefault();
if(validateFormData() == false){
  return;
}else{
  console.log(favbook);

    $.ajax({
    type: 'POST',
    url: "https://cse120-2021api-kristina.herokuapp.comdata",
    data: favbook,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
  }
}

function saveFootballData(e) {
e.preventDefault();
if(validateFormData() == false){
  return;
}else{
  console.log(myhobby);

    $.ajax({
    type: 'POST',
    url: "https://cse120-2021api-kristina.herokuapp.com/data",
    data: myhobby,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
  }
}

function updateBookData(e) {
  e.preventDefault();
  var updatedBook = {};
  updatedBook.id = document.getElementById("_idBook").value;
  updatedBook.fname = document.getElementById("fnameBook").value;
  updatedBook.title = document.getElementById("titleBook").value;
  updatedBook.author = document.getElementById("authorBook").value;
  updatedBook.colour = document.getElementById("colourBook").value;
  updatedBook.covertype = document.getElementById("covertypeBook").value;
  updatedBook.npages = document.getElementById("npagesBook").value;
  updatedBook.price = document.getElementById("priceBook").value;
  updatedBook.currency = document.getElementById("currencyBook").value;
  updatedBook.language = document.getElementById("languageBook").value;
  updatedBook.originalLanguage = document.getElementById("originallanguageBook").value;
  updatedBook.edition = document.getElementById("editionBook").value;
  updatedBook.dimensions = document.getElementById("dimensionsBook").value; 
  updatedBook.publisher = document.getElementById("publisherBook").value; 
  updatedBook.publishingdate = document.getElementById("publishingdateBook").value;
  updatedBook.originalpublishingdate = document.getElementById("originalpublishingdateBook").value;
  updatedBook.genre = document.getElementById("genreBook").value;
  updatedBook.age = document.getElementById("ageBook").value;

  
  if(validateFormData() == false){
    return;
  }else{
    console.log(favbook);

      $.ajax({
      type: 'POST',
      url: "https://cse120-2021api-kristina.herokuapp.com/data",
      data: updatedBook,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }
}

function updateFootballData(e) {
  e.preventDefault();
  var updatedFootball = {};
  updatedFootball.id = document.getElementById("_idfootball").value;
  updatedFootball.fname = document.getElementById("fnameFootball").value;
  updatedFootball.duration = document.getElementById("durationFootball").value;
  updatedFootball.spendtime = document.getElementById("spendtimeFootball").value;
  updatedFootball.longestspendtime = document.getElementById("longestspendtimeFootball").value;
  updatedFootball.position = document.getElementById("positionFootball").value;
  updatedFootball.favclub = document.getElementById("favclubFootball").value;
  updatedFootball.favnationalteam = document.getElementById("favnationalteamFootball").value;
  updatedFootball.favleague = document.getElementById("favleagueFootball").value;
  updatedFootball.competition = document.getElementById("competitionFootball").value;
  updatedFootball.favgoalkeeper = document.getElementById("favgoalkeeperFootball").value;
  updatedFootball.favdefender = document.getElementById("favdefenderFootball").value;
  updatedFootball.favmidfielder = document.getElementById("favmidfielderFootball").value;
  updatedFootball.favforward = document.getElementById("favforwardFootball").value;
  updatedFootball.favcoach = document.getElementById("favcoachFootball").value;

  if(validateFormData() == false){
    return;
  }else{
    console.log(myhobby);

      $.ajax({
      type: 'POST',
      url: "https://cse120-2021api-kristina.herokuapp.com/data",
      data: updatedFootball,
      cache: false,
      dataType : 'json',
      success: function (data) {
        console.log("success");
      },
      error: function (xhr) {
        console.error("Error in post", xhr);
      },
      complete: function () {
        console.log("Complete");  
      }
    });
  }
}






function loadExistingData() {
    myhobbyData = [];
    favbookData = [];
    otherData = [];
    $.ajax({
        type : "GET",
        url : "https://cse120-2021api-kristina.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
        	console.log("success", data);
          loadedData = data.data;
          data.data.forEach(elem =>{
            if(elem["owner"] == "Kristina Sukiasyan"){
              if(elem["project"] == "hobby"){
                myhobbyData.push(elem);
              } else {
                favbookData.push(elem);
              }
            }else{
              otherData.push(elem);
            }
          })
          displayData(myhobbyData, "footballDataContainer");
          displayData(favbookData, "bookDataContainer");
          displayData(otherData, "otherDataContainer");
        },
        error : function(data) {
            console.log("Error")
        }
    });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })
      if (elem["owner"] == "Kristina Sukiasyan") {
        var button2 = document.createElement("button");
        button2.innerHTML = "Edit";
        button2.className = "editButton";
        button2.id = "edit_"+ elem["_id"];
        button2.addEventListener("click", function(e){
        editData(e, e.target.id);
        }, false);
        item.appendChild(button2);
      }

      if (elem["owner"] = "Kristina Sukiasyan" || (elem["fname"] && elem["fname"].indexOf("Kristina Sukiasyan") > -1)){
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = elem["_id"];
        button.addEventListener("click", function(e){
            deleteData(e.target.id);
        }, false);
        item.appendChild(button);
      }
        document.getElementById(containerDivName).appendChild(item);
    })

      document.querySelectorAll("#footballDataContainer div.item").forEach(div => {
      div.addEventListener("click", function(e){
        if (this.style.height == "20px") {
          this.style.height = "auto";
        } else {
          this.style.height = "20px";
        }
      })        
    })
}

function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse120-2021api-kristina.herokuapp.com/data",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

var loadedData = [];

function editData(e){
  e.stopImmediatePropagation(); 
 var id = e.target.id; 
 var tmp = id.split("edit_");
 var item_id = tmp[1];
 console.log(item_id);

loadedData.forEach(item => {
    if (item._id == item_id && item["owner"] == "Kristina Sukiasyan") {
        console.log(item); 
        localStorage = window.localStorage;
        localStorage.setItem('editItem', JSON.stringify(item));
        if (item["project"] == "Book"){
          document.location = "edit_book.html";
        } else {
        document.location  = "edit_football.html"; 
      }
    }
  })
}

function loadBookEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_idBook").value = editItem["_id"];
  document.getElementById("titleBook").value = editItem["title"];
  document.getElementById("fnameBook").value = editItem["fname"];
  document.getElementById("authorBook").value = editItem["author"]; 
  document.getElementById("colourBook").value = editItem["colour"];
  document.getElementById("covertypeBook").value = editItem["covertype"];
  document.getElementById("npagesBook").value = editItem["npages"];
  document.getElementById("priceBook").value = editItem["price"];
  document.getElementById("currencyBook").value = editItem["currency"];
  document.getElementById("languageBook").value = editItem["language"];
  document.getElementById("originallanguageBook").value = editItem["originalLanguage"];
  document.getElementById("editionBook").value = editItem["edition"]; 
  document.getElementById("dimensionsBook").value = editItem["dimensions"];
  document.getElementById("publisherBook").value = editItem["publisher"];
  document.getElementById("publishingdateBook").value = editItem["publishingdate"];
  document.getElementById("originalpublishingdateBook").value = editItem["originalpublishingdate"];
  document.getElementById("genreBook").value = editItem["genre"];
  document.getElementById("ageBook").value = editItem["age"];


}

function loadFootballEditItem(){
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_idFootball").value = editItem["_id"];
  document.getElementById("fnameFootball").value = editItem["fname"];
  document.getElementById("durationFootball").value = editItem["duration"];
  document.getElementById("spendtimeFootball").value = editItem["spendtime"];
  document.getElementById("longestspendtimeFootball").value = editItem["longestspendtime"];
  document.getElementById("positionFootball").value = editItem["position"];
  document.getElementById("favclubFootball").value = editItem["favclub"];
  document.getElementById("favnationalteamFootball").value = editItem["favnationalteam"];
  document.getElementById("favleagueFootball").value = editItem["favleague"];
  document.getElementById("competitionFootball").value = editItem["competition"];
  document.getElementById("favgoalkeeperFootball").value = editItem["favgoalkeeper"];
  document.getElementById("favdefenderFootball").value = editItem["favdefender"];
  document.getElementById("favmidfielderFootball").value = editItem["favmidfielder"];
  document.getElementById("favforwardFootball").value = editItem["favforward"];
  document.getElementById("favcoachFootball").value = editItem["favcoach"];
}


function toggleOtherData() {
  var otherData = document.getElementById("otherDataContainer");
  if (otherData.style.display == "block") {
    otherData.style.display = "none";
  } else {
    otherData.style.display = "block";
  }
}
