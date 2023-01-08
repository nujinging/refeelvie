import axios from "axios";

const request = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "cb772a50acc4cd6917b12854484b9d91",
        language: "ko-KR",
    },

});
export const movieApi = {
    nowPlaying: (type, now) => request.get(`${type}/${now}`),
    popular: (type) => request.get(`${type}/popular`),
    TopRated: (type) => request.get(`${type}/top_rated`),


    // 장르 키워드
    genre: (value) => request.get(`genre/${value}/list`),
    // 장르 아이템 리스트
    genreList: (type, value, page) => request.get(`discover/${type}?with_genres=${value}&page=${page}`),



    trending: (media_type, time_window) => request.get(`trending/${media_type}/${time_window}`),

    // 리스트
    itemList: (type, value) => request.get(`${type}/${value}/lists`),

    // 등장인물
    person: (type, value) => request.get(`${type}/${value}/credits`),

    // 비슷한
    similar: (type, value) => request.get(`${type}/${value}/similar`),

    // 추천
    recommend: (type, value) => request.get(`${type}/${value}/recommendations`),

    video: (type, value) => request.get(`${type}/${value}/videos`),
    social: (type, value) => request.get(`${type}/${value}/external_ids`),
    image: (type, value) => request.get(`${type}/${value}/images?&language=fr&include_image_language=fr,null,en`),




    // 언어 바꾸기
    mediaImages: (movie_id) => request.get(`movie/${movie_id}/images?&language=en-US`),

    // 인물
    personWork: (person_id) => request.get(`person/${person_id}/movie_credits`),
    personTv: (person_id) => request.get(`person/${person_id}/tv_credits`),
    personSocial: (person_id) => request.get(`person/${person_id}/external_ids`),

    movieDetail: (type, id) => request.get(`${type}/${id}`),

    // 가장 인기있는 
    popularTv: (type) => request.get(`/${type}/popular`),

    search: (keyword) =>
        request.get("search/multi", {
            params: {
                query: keyword,
            },
        }),

    personDetail: (id) =>
        request.get(`person/${id}`, {
            params: { append_to_response: "videos" },
        }),
};