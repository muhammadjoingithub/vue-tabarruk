<template>
    <div class="container-fluid footer">
      <div class="container footer-section">
            <div class="footer-texts1">
              <a href="#"><img src="/public/images/slowlogo.png" alt=""></a>
                <p>This website is created to share information about historical, unique places located in Turkic states. </p>
            </div>
            <div class="footer-texts2">
               <a href="#"><img src="/public/images/tg.png" alt=""></a>
                <a href="#"><img src="/public/images/twit.png" alt=""></a>

               <a href="#"><img src="/public/images/youtube.png" alt=""></a>
                <a href="#"><img src="/public/images/insta.png" alt=""></a>
            </div>
            <div class="footer-texts3">
                 <div class="text3">Main page</div>
                 <div class="text3">Media resources </div>
                 <div class="text3">Contact</div>
                 <div class="text3">F.A.Q</div>
                 <div class="text3">Privacy  </div>
            </div>
      </div>
    </div>
<div class="container last-footer">
       <p>© 2023, Tabarruk Ziyorat</p>
       <a href="#"><img src="/public/images/uiclogo.png" alt=""></a>
    </div>
</template>

<script setup lang="ts">

</script> 
<style>
.footer{
    background-color: rgb(8, 8, 8);
    height: auto;
    padding: 10px;
    background-image: url(/public/images/sun.png);
    background-repeat: no-repeat;
    object-fit: cover;
    border-top: 1.6px solid rgba(255, 255, 255, 0.16);
    border-bottom: 1.6px solid rgba(255, 255, 255, 0.16);
}
.footer-section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px;
}
.footer-texts2{
    display: flex;
    justify-content: center;
    align-items: end;
}
.footer-texts1 p{
    color: var(--White, #FFF);
    font-family: "Gilroy"sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
}
.footer-texts2 a{
    color: #E54545;
}

.footer-texts3{
   display: grid;
   grid-template-columns: 1fr 1fr;
   height: 100px;
}
.text3{
    padding: 10px;
    color: var(--White, #FFF);
    font-family: "Gilroy",sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
}
.text3:hover{
    color: #E54545
}
.last-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px ;
}
.last-footer p{
    color: var(--White, #FFF);
font-feature-settings: 'liga' off;
font-family: "Gilroy",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%;
margin-top: 20px; /* 18.2px */
}
</style>
