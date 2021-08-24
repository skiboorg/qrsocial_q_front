import { api } from 'boot/axios'


const state = () => ({
  topStreamers:[],
  topStreams:[],
  topTickToks:[],
  topDonaters:[],
  gifts:[],
  currentGirl:{},
  currentChat:0,
  giftModalActive:false,
  userTags:[]


})

const mutations = {
 updateTopStreamers(state,data){
    state.topStreamers = data
  },
  updateTopStreams(state,data){
    state.topStreams = data
  },
  updateTopTickToks(state,data){
      state.topTickToks = data
    },
updateTopDonaters(state,data){
      state.topDonaters = data
    },
  updateCurrentChat(state,data){
      state.currentChat = data
    },
   updateCurrentGirl(state,data){
      state.currentGirl = data
    },
  updateUserTags(state,data){
      state.userTags = data
    },
  updateGiftModal(state,data){
      state.giftModalActive = data
    },
   updateGifts(state,data){
      state.gifts = data
    },

}

const actions = {

  async getTopStreamers ({commit}){
   const response = await api.get( '/api/v1/user/get_streamers?at_home=true')
    commit('updateTopStreamers', response.data)
    console.log(response.data)
  },
  async getTopStreams ({commit}){
   const response = await api.get( '/api/v1/stream/get_streams_for_home_page')
    commit('updateTopStreams', response.data)
  },
  async getTopDonaters ({commit}){
   const response = await api.get( '/api/v1/gift/get_user_top10_donaters')
    commit('updateTopDonaters', response.data)
  },
  async getUserTags ({commit}){
   const response = await api.get( '/api/v1/user/get_user_tags')
    commit('updateUserTags', response.data)
    console.log('tags',response.data)
  },
  async getGifts ({commit}){
   const response = await api.get( '/api/v1/gift/get_all')
    commit('updateGifts', response.data)

  },
  async getGirlInfo ({commit,getters},nickname){
   console.log('store girl_profile first check',getters['currentGirl'])
      if (!getters['currentGirl'].nickname  || getters['currentGirl'].nickname !==nickname){
         const response = await api.get(`/api/v1/user/get_user_info_by_nickname?nickname=${nickname}`)
      commit('updateCurrentGirl',response.data)
      console.log('store girl_profile after update',getters['currentGirl'])
      }
  },
  setCurrentChat({commit},data){
    commit('updateCurrentChat', data)
  },
  setGiftModal({commit},data){
    commit('updateGiftModal', data)
  }


}

export const getters = {
  topStreamers: (state) => state.topStreamers,
  topStreams: (state) => state.topStreams,
  topTickToks: (state) => state.topTickToks,
  currentChat: (state) => state.currentChat,
  currentGirl: (state) => state.currentGirl,
  userTags: (state) => state.userTags,
  giftModalActive: (state) => state.giftModalActive,
  gifts: (state) => state.gifts,

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
