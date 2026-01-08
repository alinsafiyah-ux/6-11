<script>
alert("Selamat Datang");
function mula(){
   alert("Boleh start isi borang.");
   }
function hantaq(){
   var nama = document.getElementById("name").value;
   var fon = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
	var comp=document.getElementById("complaint").value;

   alert ("Terima Kasih"+ nama +" Kami akan hubungi anda di "+ fon);
	
   document.getElementById("result").innerHTML ="Terima Kasih"+ nama +" Kami akan hubungi anda di "+ fon + " atau " + email;
}

function darkmode() {
  document.getElementById("first-page").style.color="red";
  document.getElementById("first-page").style.backgroundColor="darkblue";

}

function lightmode() {
  document.getElementById("first-page").style.color="black";
  document.getElementById("first-page").style.backgroundColor="lightblue";

}
function LargeText() {
  document.getElementById("first-page").style.fontSize="200%";}
  
function SmallText() {
  document.getElementById("first-page").style.fontSize="50%";}
  
function borang() {
  document.getElementById("form").style.backgroundColor="pink"; }
  
function welc() {
  document.getElementById("welcome").style.backgroundColor="green"; }
  
</script>