const NavigationSidebar = () => {
    return(`
   <ul class="list-group">
        <li class="list-group-item"><i class="fab fa-twitter me-1"></i></li>
        <li class="list-group-item"><i class="fa fa-solid fa-home me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Home</span></li>
        <li class="list-group-item active"><i class="fa fa-hashtag me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Explore</span></li>
        <li class="list-group-item"><i class="fa fa-bell me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Notifications</span></li>
        <li class="list-group-item"><i class="fa fa-envelope me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Messages</span></li>
        <li class="list-group-item"><i class="fa fa-bookmark me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span></li>
        <li class="list-group-item"><i class="fa fa-list me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Lists</span></li>
        <li class="list-group-item"><i class="fa fa-user me-2"></i><span class="d-none d-xl-inline d-xxl-inline">Profile</span></li>
        <!--  The fa ellipsis icon is just not working for me. Can't figure out why  -->
        <li class="list-group-item"><i class="fa fa-ellipsis-h me-2"></i><span class="d-none d-xl-inline d-xxl-inline">More</span></li>
      </ul>
      <button class="btn btn-primary w-100 mt-2">
        Tweet
      </button>
 `);
}
export default NavigationSidebar;