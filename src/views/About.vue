<template>
  <div style="margin-bottom: 80px;">
    <h1>Hi!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Mike</strong>, also known as Shiffed online, a hobbyist game developer.<br/>
        I spend my days working, spending time with my wife & daughter or prototyping games & creating YouTube guides.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">some of my own games</router-link> and assisted on <router-link to="/other-projects">other people's projects</router-link></div>

      <div style="margin-top: 40px;">If you are looking for help with the assets i've been using in my projects or videos, you can reach me at <a href="mailto:puppygamingdev@gmail.com">puppygamingdev@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/Puppy.png" alt="Avatar of Mike" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>