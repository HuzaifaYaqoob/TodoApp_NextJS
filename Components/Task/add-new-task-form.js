import Form, { InputField, TextArea, Button, DropDown, DateTime, DropDownItem } from "../Form/Form"
import { useEffect, useState } from "react"

import Image from 'next/image'
import { apiBaseURL } from "../../redux/ApiVariables"
import { useRouter } from "next/router"


const AddNewTaskForm = ({ data, ...props }) => {
    const router = useRouter()
    const [error_message, setErrorMessage] = useState('')

    const [title_inp, setTitleInp] = useState(data ? data.title : '')
    const [description_inp, setDescriptionInp] = useState(data ? data.description : '')
    const [status_inp, setStatusInp] = useState(data ? data.status : 'ToDo')
    const [ends_date_inp, setEndsDateInp] = useState(data ? data.ends_date : '')
    const [image_inp, setImageInp] = useState(data ? data.image : null)
    const [selectedimg, setselected] = useState(null)
    const [selectedimgURL, setSelectedimgURL] = useState(null)


    const ValidateData = () => {
        if (title_inp == '' || description_inp == '' || status_inp == '' || ends_date_inp == '' || selectedimg == null) {
            setErrorMessage('All Fields Are Required')
            return false
        }
        return true
    }

    const UploadData = () => {
        if (ValidateData()) {
            let form_data = new FormData()
            form_data.append('title', title_inp)
            form_data.append('description', description_inp)
            form_data.append('status', status_inp)
            form_data.append('ends_date', ends_date_inp)
            {selectedimg && form_data.append('image', selectedimg.target.files[0], selectedimg.target.files[0].name)}
            
            fetch(
                apiBaseURL + `/api/todo/?todo_id=${router.query.taskID}`,
                {
                    method: data && data.id && router.query.taskID ? 'PUT' : 'POST',
                    headers: {
                        Authorization: `Token ${localStorage.getItem('auth_token')}`
                    },
                    body: form_data
                }
            )
                .then(response => response.json())
                .then(response_data => {
                    console.log(response_data)
                    if(response_data.status_code == 200){
                        router.push('/')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    const SelectImage = (event) => {
        console.log('called')
        setselected(event)
        setSelectedimgURL(URL.createObjectURL(event.target.files[0]))
    }


    useEffect(() => {
    }, [selectedimg])

    const dropDownItems = [
        'ToDo',
        'Doing',
        'In Progress',
        'Done',
        'Completed',

    ]
    return (
        <div>
            <Form>
                {
                    selectedimgURL ?
                        'True' : 'False'
                }
                {
                    image_inp ?
                        'True' : 'False'
                }
                <div className='text-center' >
                    <label htmlFor="task_img" className='cursor-pointer inline-block mx-auto'>
                        <div className='flex items-center justify-center w-40 h-40 relative bg-gray-300 rounded-full overflow-hidden group bg-cover bg-center'>
                            <span className='group-hover:flex items-center justify-center hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-30'>
                                <Image src='/images/upload-icon-3.png' width={320/5} height={211/5} />
                            </span>
                            {
                                image_inp && !selectedimgURL ?
                                <div className="w-full h-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url('${apiBaseURL + image_inp}')`}}>
                                </div>
                                :<></>
                            }
                            {
                                selectedimgURL &&
                                <img src={selectedimgURL} />
                            }

                        </div>
                    </label>
                    <input type="file" id='task_img' accept="image/jpeg, image/png" className='hidden' onChange={(event) => { (SelectImage(event)) }} />
                </div>
                <InputField type='text' value={title_inp} onChange={(event) => { setTitleInp(event.target.value) }} placeholder='Enter Task Title' Label='Title' className='bg-gray-100 focus:bg-gray-200' />
                <TextArea Label='Description' onChange={(event) => { setDescriptionInp(event.target.value) }} value={description_inp} placeholder='Enter Description' className='bg-gray-100 focus:bg-gray-200' />

                <DropDown active={[status_inp, setStatusInp]} data={dropDownItems} />

                <InputField type='date' min='2021-10-18' Label='End Date' placeholder='Choose Your Date' value={ends_date_inp} onChange={(event) => { setEndsDateInp(event.target.value) }} />
                <p className='text-red-500 text-sm'>{error_message}</p>
                <Button text='Save' onClick={(event) => { UploadData() }} className='bg-green-500 w-full' />
            </Form>
        </div>
    )
}

export default AddNewTaskForm