
function showSection(sectionId) {
  
  let sections = document.querySelectorAll("aside > ul > div");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId) {
      sections[i].classList.remove("hidden");
      let sections1 =document.querySelectorAll("main>p");
      showSection1(sections1);
      showSection2(sections1);
      showSection3(sections1);
      showSection4(sections1);
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection1(sectionId1) {
  
  let sections = document.querySelectorAll("main >p");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection2(sectionId1) {
  
  let sections = document.querySelectorAll("footer >p");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
      if(sectionId1=="link"){
        var footer = document.getElementById("link");
        footer.scrollIntoView();
      }
      else if(sectionId1=="link1"){
        var footer = document.getElementById("link1");
        footer.scrollIntoView();
      }
      else{
        var footer = document.getElementById("link2");
        footer.scrollIntoView();
      }
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection3(sectionId1) {
  
  let sections = document.querySelectorAll("main > div");
  
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}
function showSection4(sectionId1) {
  
  let sections = document.querySelectorAll("main > div >div");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}

    let is_online=0;
    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var validUsername = "admin";
      var validPassword = "admin";
      document.getElementById("log_in").style.display = "block";
      document.getElementById("log_in").style.display = "none";
      document.getElementById("admin-form").style.display = "block";
      if (username === validUsername && password === validPassword) {
          alert("Login successful!");
          document.getElementById("aposindesh").style.display = "block";  
          is_online = 1;
      } else {
          alert("Invalid username or password. Please try again.");
      }

  }

  function logout() {

    //document.getElementById("syndesh").style.display = "block";
    document.getElementById("aposindesh").style.display = "block";
    document.getElementById("aposindesh").style.display = "none";
    //document.getElementById("admin-form").style.display = "none";
    if(is_online == 1){
    alert("Logout successfully!"); 
    document.getElementById("aposindesh").style.display = "block";
    document.getElementById("aposindesh").style.display = "none";
    is_online=0;
    }
    else {
      alert("you have to login first");
      document.getElementById("aposindesh").style.display = "block";
      document.getElementById("aposindesh").style.display = "none";
    }

  }
    

const links = [
  { id: 1, title: "Η Βιογραφία Μέσω Wikipedia", url: "https://en.wikipedia.org/wiki/Jon_Bon_Jovi" },
  { id: 2, title: "Album για αγορά", url: "https://shop.bonjovi.com/collections/music" },
  { id: 3, title: "Playlist με τα δημοφιλέστερα τραγούδια του", url: "https://www.youtube.com/watch?v=gH5luZqPF4I&ab_channel=ANHTAMMO" }
  ];

function addLink() {
  const newLink = {
    title: prompt("Εισαγωγή νέου τίτλου συνδέσμου:"),
    url: prompt("Εισαγωγή νέου URL συνδέσμου:")
  };
      links.push(newLink);
      displayLinks();
    }
    function editLink() {
      const linkIdToEdit = prompt("Εισαγωγή αριθμού ID συνδέσμου προς επεξεργασία:");
      const linkToEdit = links.find(link => link.id === parseInt(linkIdToEdit));
  
      if (linkToEdit) {
        linkToEdit.title = prompt("Επεξεργασία τίτλου συνδέσμου:", linkToEdit.title);
        linkToEdit.url = prompt("Επεξεργασία URL συνδέσμου:", linkToEdit.url);
      } else {
        alert("Δεν βρέθηκε σύνδεσμος με τον καθορισμένο αριθμό ID.");
      }
        displayLinks();
    }
    function deleteLink() {
      const linkIdToDelete = prompt("Εισαγωγή αριθμού ID συνδέσμου προς διαγραφή:");
      const linkIndexToDelete = links.findIndex(link => link.id === parseInt(linkIdToDelete));
  
      if (linkIndexToDelete !== -1) {
        // Διαγραφή του συνδέσμου από τον πίνακα
        links.splice(linkIndexToDelete, 1);
      } else {
        alert("Δεν βρέθηκε σύνδεσμος με τον καθορισμένο αριθμό ID.");
      }
  
      displayLinks();
    }
  
    function displayLinks() {
      // Καθαρισμός του HTML περιεχομένου της περιοχής footer
      document.querySelector('footer').innerHTML = '';
      // Δημιουργία νέων ετικετών p για κάθε σύνδεσμο και προσθήκη στην περιοχή footer
      links.forEach(link => {
        const newLinkElement = document.createElement('p');
        newLinkElement.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
        document.querySelector('footer').appendChild(newLinkElement);
      });
    }
    