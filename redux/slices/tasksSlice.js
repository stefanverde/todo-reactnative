import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: []
  },
  reducers: {
    taskAdded: (state, action) => {
      state.taskList.push(action.payload)
    },
    clearTasks: (state) => {
        state.taskList = [];
    }
    
  }
})

export const { taskAdded, clearTasks} = tasksSlice.actions
export default tasksSlice.reducer

