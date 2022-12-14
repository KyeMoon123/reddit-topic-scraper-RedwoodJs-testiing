import DialogContent from "@mui/material/DialogContent";
import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import DialogActions from "@mui/material/DialogActions";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Props {
  subreddits: object[]
  subredditsOnTopic?:object[]
  setName: Function
  setSubredditsList: Function
  setDescription: Function
  handleSubmit: Function
  action: string
  topic?: object
}
const TopicForm = ({subreddits, setName, setSubredditsList, setDescription, handleSubmit,action, subredditsOnTopic,topic}:Props) => {
  let defaultValue = []
  if(action==="edit" && subredditsOnTopic){
    defaultValue = subredditsOnTopic.map((item:any)=>item.subreddit)
  }

  return (
    <>
      <div className="p-6">
        <DialogContent className="space-y-8">
          <div>
            <div className="flex font-bold ">Topic Name *</div>
            <TextField
              margin="dense"
              id="name"
              // @ts-ignore
              defaultValue={topic?.name || null}
              label=""
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
            <h3 className={'tex-md font-light opacity-60'}>A name to keep your leads nice and organised, the name of your product works well. Max 50 characters. </h3>
          </div>
          <div>
            <div className="flex font-bold ">Describe your product *</div>
            <TextField
              multiline
              // @ts-ignore
              defaultValue={topic?.description || null }
              margin="dense"
              id="description"
              label="eg. A tool for helping small business owners run facebook marketing campaigns"
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value)
              }}
            />
            <h3 className={'tex-md font-light opacity-60'}>Describe your product the same way you would describe it to a friend. </h3>
            <h3 className={'tex-md font-light opacity-60'}>A topic may also be a question that your expertise fits in to, helping you to locate people asking similar questions. </h3>
          </div>
          <div>
            <h3 className={'font-bold'}>Subreddits</h3>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              onChange={(event,value:any)=>{
                setSubredditsList(value.map((sub:any)=> {
                  return{id: sub.id, extId: sub.ext_id}
                }))
              }}
              options={subreddits}
              disableCloseOnSelect
              isOptionEqualToValue={(option,value)=>option.id === value.id}
              getOptionLabel={(option) => option.channel_name}
              defaultValue={defaultValue}
              renderOption={(props,option,{ selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.channel_name}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Subreddits" placeholder="Choose some subreddits to track" />
              )}
            />
            <h3 className={'tex-md font-light opacity-60'}>Choose some actively tracked subreddits to narrow down the search.  </h3>
            <h3 className={'tex-md font-light opacity-60'}>If you leave this blank xxx will search all tracked subreddits for leads </h3>

          </div>

          <div></div>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-primary" onClick={()=>handleSubmit()}>{action==="create"?"Create Topic": "Edit Topic"}</button>
        </DialogActions>
      </div>
    </>
  )
}

export default TopicForm
