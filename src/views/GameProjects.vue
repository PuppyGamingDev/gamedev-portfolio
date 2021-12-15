<template>
  <div>
    <h1>My Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are projects that I have developed or created.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      Contact me for opportunities at <a target="_blank" href="mailto:puppygamingdev@gmail.com">puppygamingdev@gmail.com</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
