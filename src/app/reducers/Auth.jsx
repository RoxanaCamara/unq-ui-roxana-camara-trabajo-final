

export default function authUser(state = { }, action) {
    switch (action.type) {
      case INVALIDATE_SUBREDDIT:
        return {
          ...state,
          
        }
      default:
        return state
    }
  }
