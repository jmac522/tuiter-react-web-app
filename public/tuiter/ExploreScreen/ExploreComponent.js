import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
          <div class="d-flex justify-content-center align-items-center">
            <i class="fa fa-search position-relative text-secondary"
               style="left: 30px; z-index: 100;">
            </i>
            <input class="wd-search border me-2" type="text" placeholder="Search Tuiter">
            <a href="explore-settings.html">
              <img src="gear.png"/>
            </a>
          </div>
    
          <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-sm-none d-md-inline">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
          </ul>
    
          <div class="p-0">
            <img class="w-100 h-100" src="../../images/starship.jpg" alt="" />
            <div id="text" class="position-absolute fs-2 h-100 d-flex align-items-center text-light fw-bold"
                 style="top:75px;">
              <span class="p-2">SpaceX's Starship</span>
            </div>
          </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
