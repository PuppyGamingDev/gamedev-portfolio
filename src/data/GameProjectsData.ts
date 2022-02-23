import ProjectData from "@/data/ProjectData.ts";

export default [
  new ProjectData(
    "puppybot",
    "Unity Invoice Discord Bot",
    "img/Puppy.png",
    `
    <div class="paragraph">
     <strong>PuppyBot</strong> is my first Discord Bot that I have created. I made it initially for personal use after releasing an asset on the Unity Asset store to verify users in my own Discord.
    </div>
    <div class="paragraph">
        Workflow :
        <ul>
        <li>Users can type '?verify' in any of the Discord channels</li>
        <li>Bot will DM the user with instructions to verify</li>
        <li>User inputs their invoice using '?invoice (InvoiceNumberHere)' as instructed by the bot</li>
        <li>Bot uses the Unity Invoice API to see if their invoice exists and compares the package name to your asset</li>
        <li>If the package name matches, it grants the user a predefined role in your server</li>
        <li>It will also store a list of which users uses which invoice number for your future reference</li>
        </ul>
    </div>
    `,
    "#23bd69",
    true
  ),
  new ProjectData(
    "project-1",
    "Simple Crypto WebGL Templates",
    "img/projects/project-2.png",
    `
    <div class="paragraph">
        <strong>Simple Crypto WebGL Templates</strong> enables anybody to get NFT data into their game by simply selecting a WebGL template in Player Settings for their preffered blockchain then simply Build! It comes with a demo which give you all the necessary code to get the data you want to reference for each of a users NFTs.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/gJsexQnvQ6w" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        This asset is still awaiting review from the Unity Asset Store.
    </div>
    </div>

    `,
    "#5a78af"
  ),
  new ProjectData(
    "project-2",
    "Mini Battles",
    "img/projects/project-1.png",
    `
    <div class="paragraph">
     <strong>Mini Battles</strong> is my first game released on any store and serves as an end result for one of my YouTube playlists of combining Super Multipayer Shooter Template and CBS from the Unity Asset Store.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/sK4un0JAWbg" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.PuppyGaming.MiniBattles" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Multiplayer or with Bots</li>
        <li>Cosmetics!</li>
        <li>Different characters to choose from</li>
        <li>Clans</li>
        <li>Daily rewards</li>
        <li>and Leaderboards</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://puppygaming.co.uk/wp-content/uploads/2021/10/Screenshot_20211010-035558.jpg" alt="Mini Battles Screenshot" />
        <img class="phone-screenshot" src="https://puppygaming.co.uk/wp-content/uploads/2021/10/Screenshot_20211010-035729.jpg" alt="Mini Battles Screenshot" />
    </div>
    `,
    "#23bd69"
  ),
  new ProjectData(
    "project-3",
    "YouTube Channel",
    "img/projects/project-2.png",
    `
    <div class="paragraph">
        My <strong>YouTube Channel</strong> was created with the aim of helping others by creating guides for the additions or modifications I make with different assets from the Unity Asset Store.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/J9H--EYnykg" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        You can visit the channel <a href="https://www.youtube.com/channel/UCqUH4soOKdWsTBx6O81ERBg" target="_blank">HERE</a>.
    </div>
    </div>

    `,
    "#5a78af"
  ),
];
