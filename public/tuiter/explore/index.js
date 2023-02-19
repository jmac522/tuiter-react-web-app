import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
function exploreComponent() {

    $('#wd-explore').append(`
       <h2>Explore</h2>
      <div class="row mt-2">
       <div class="col-xl-2 col-lg-1 col-2">
        ${NavigationSidebar()}
       </div>
       <div class="col-xl-6 col-lg-7 col-10">
        ${ExploreComponent()}
       </div>
       <div class="col-lg-4 col-0 d-none d-lg-block">
        ${WhoToFollowList()}
       </div>
      </div>
   `);
}
$(exploreComponent);