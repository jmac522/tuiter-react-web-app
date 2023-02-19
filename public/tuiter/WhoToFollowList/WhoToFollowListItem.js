const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
          <div class="row">
            <div class="col-2 d-flex justify-content-center align-items-center">
              <img src=${who.avatarIcon} alt="Java Logo" class="img-thumbnail rounded rounded-circle">
            </div>
            <div class="col-7">
              <div class="fw-bold">${who.userName} <i class="fa fa-check-circle fa-solid ms-1"></i></div>
              <div class="fw-light fs-6">@${who.handle}</div>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center">
              <button class="btn btn-primary">
                Follow
              </button>
            </div>
          </div>
        </li>
 `);
}
export default WhoToFollowListItem;