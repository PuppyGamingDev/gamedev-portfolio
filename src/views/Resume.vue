<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Mike</strong>, the developer of Puppy Gaming.
      <br />I have always had an interest in how games worked so it made sense to learn how games were developed.
      <br />Currently learning C# development in Unity.
      <br />I like to make little games when I get fun ideas.
      <br />
      <br />Im currently only doing game development during my spare time along with my YouTube videos. If you are looking for support or for work on any of the assets I use please feel free to  
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
      <!--  <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a> -->
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Puppy.png" alt="Photo of Mike" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Working History</h2>

      <h3>Warehouse Operative - Next Day Courier</h3>
      <h4>2006 - 2013</h4>

      <div class="tech-stack">Working in a small team to scan, separate and organise packages ready to be loaded onto delivery vehicles.</div>

      <h3>Warehouse Operative - Food Distribution</h3>
      <h4>2013 - 2015</h4>

      <div class="tech-stack">Working alone or in a team to pick food orders in a cooled or freezer environment and load delivery vehicles to a schedule.</div>

      <h3>Shift Technician - Energy Recovery Facility</h3>
      <h4>2015 - Present</h4>

      <div class="tech-stack">Monitoring and controlling the combustion process of waste that is then used to drive a steam turbine.</div>


    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "Resume",
  components: {
    
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>