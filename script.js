 

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'introduction to word blending',
        'name': 'introduction to word blending.mp4',
        'duration': 'play',
    },
    {
        'id': 'a2',
        'title': 'and',
        'name': 'and.mp4',
        'duration': 'play',
    },
    {
        'id': 'a3',
        'title': 'jump',
        'name': 'jump.mp4',
        'duration': 'play',
    },

    {
        'id': 'a4',
        'title': 'dog',
        'name': 'dog b.mp4',
        'duration': 'play',
    },
    {
        'id': 'a5',
        'title': 'he',
        'name': 'he.mp4',
        'duration': 'play',
    },
    {
        'id': 'a6',
        'title': 'jet',
        'name': 'jet.mp4',
        'duration': 'play',
    },
    {
        'id': 'a7',
        'title': 'run',
        'name': 'run.mp4',
        'duration': 'play',
    },

    {
        'id': 'a8',
        'title': 'sun',
        'name': 'sun.mp4',
        'duration': 'play',
    },
    {
        'id': 'a9',
        'title': 'sat',
        'name': 'sat.mp4',
        'duration': 'play',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
