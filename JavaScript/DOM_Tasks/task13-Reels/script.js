const reels = [
  {
    username: "aarav.mehta",
    likeCount: 15200,
    isLiked: false,
    commentCount: 430,
    caption: "Sunset vibes hit different 🌅✨",
    shareCount: 120,
    video: "./reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    isFollowed: true,
    isMuted: true,
  },
  {
    username: "riya.singh",
    likeCount: 8400,
    isLiked: true,
    commentCount: 290,
    caption: "POV: Weekend energy 💃🔥",
    shareCount: 75,
    video: "./reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    isFollowed: false,
    isMuted: true,
  },
  {
    username: "chef_krish",
    likeCount: 22300,
    isLiked: false,
    commentCount: 510,
    caption: "Quick pasta recipe in 30 seconds 🍝💕",
    shareCount: 310,
    video: "./reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    isFollowed: true,
    isMuted: true,
  },
  {
    username: "travel.with.sana",
    likeCount: 17800,
    isLiked: true,
    commentCount: 610,
    caption: "Jaipur streets are magical 😍🌸",
    shareCount: 210,
    video: "./reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    isFollowed: false,
    isMuted: true,
  },
  {
    username: "fitwitharman",
    likeCount: 9500,
    isLiked: false,
    commentCount: 188,
    caption: "Chest workout for beginners 💪🔥",
    shareCount: 60,
    video: "./reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    isFollowed: true,
    isMuted: true,
  },
  {
    username: "neha.creates",
    likeCount: 30400,
    isLiked: true,
    commentCount: 720,
    caption: "DIY room decor that actually looks good ✨🪴",
    shareCount: 410,
    video: "./reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/67.jpg",
    isFollowed: true,
    isMuted: true,
  },
  {
    username: "coding.ash",
    likeCount: 7800,
    isLiked: false,
    commentCount: 140,
    caption: "When the bug fixes itself 🧑‍💻😂",
    shareCount: 44,
    video: "./reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/71.jpg",
    isFollowed: false,
    isMuted: true,
  },
  {
    username: "musicbytara",
    likeCount: 41200,
    isLiked: true,
    commentCount: 880,
    caption: "You asked for it… full cover dropping soon 🎤💖",
    shareCount: 590,
    video: "./reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/82.jpg",
    isFollowed: true,
    isMuted: true,
  },
  {
    username: "streetphotoblogger",
    likeCount: 16300,
    isLiked: false,
    commentCount: 330,
    caption: "Clicked this today, raw & real 📸🖤",
    shareCount: 150,
    video: "./reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/89.jpg",
    isFollowed: false,
    isMuted: true,
  },
  {
    username: "funny_sam",
    likeCount: 50000,
    isLiked: true,
    commentCount: 1400,
    caption: "POV: When your mom calls your full name 😭🤣",
    shareCount: 900,
    video: "./reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/25.jpg",
    isFollowed: true,
    isMuted: true,
  }
];

const allReels = document.querySelector(".allReels");

function addData() {
  let sum = "";
  reels.forEach((reel, idx) => {
    sum += `<div class="reel">
						<video
							autoplay
							loop
							${reel.isMuted ? "muted" : ""}
							src="${reel.video}" id=${idx}></video>
            <div class="mute" id=${idx}>
            ${reel.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}

		        </div>
						<div class="bottom">
							<div class="user">
								<img
									src="${reel.userProfile}"
									alt="${reel.username}" />
								<h4>${reel.username}</h4>
								<button id=${idx} class='follow'>${reel.isFollowed ? "Unfollow" : "Follow"}</button>
							</div>
							<h3>${reel.caption}</h3>
						</div>
						<div class="right">
							<div id=${idx} class="like">
								<h4 class="like-icon icon">
                ${reel.isLiked ? '<i class="ri-heart-3-fill love"></i>' : '<i class="ri-heart-3-line"></i>'
      }

								</h4 >
  <h6>${reel.likeCount}</h6>
							</div >
							<div class="comment">
								<h4 class="comment-icon icon">
									<i class="ri-chat-3-line"></i>
								</h4>
								<h6>${reel.commentCount}</h6>
							</div>
							<div class="share">
								<h4 class="share-icon icon">
									<i class="ri-share-forward-line"></i>
								</h4>
								<h6>${reel.shareCount}</h6>
							</div>
							<div class="menu">
								<h4 class="menu-icon icon">
									<i class="ri-more-2-fill"></i>
								</h4>
							</div>
						</div >
					</div > `;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className === "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className === "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }
  if (dets.target.className === "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }
    addData();
  }
});