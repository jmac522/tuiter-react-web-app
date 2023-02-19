const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-9">
              <div class="fw-light text-secondary fs-6">${post.topic}</div>
              <div class="fw-bold">${post.userName} <i class="fa fa-check-circle fa-solid ms-1"></i>
                <span class="text-secondary fw-light">- ${post.time}</span>
              </div>
              <div class="fw-bold fs-6">${post.title}</div>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center">
              <img src=${post.image} alt="React Logo" class="img-thumbnail border-0">
            </div>
          </div>
        </li>
    `);
}
export default PostSummaryItem;