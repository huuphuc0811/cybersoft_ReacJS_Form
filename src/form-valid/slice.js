import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        id: "",
        name: "",
        phone: "",
        email: "",
    },
    validMessage: "",
    detailSv: null,
    listSv: JSON.parse(localStorage.getItem("listSv")) || []
}

const findIndexSv = (listSv, maSV) => {
    const index = listSv.findIndex((item) => item.id === maSV)
    return index;
}

const formValidReducer = createSlice({
    name: "formValidReducer",
    initialState,
    reducers: {
        handleOnChangeRedux: (state, action) => {
            const { payload } = action;
            // console.log(payload);
            const { name, value } = payload;
            state.user = {
                ...state.user,
                [name]: value
            }
        },
        setAddSv: (state, action) => {
            const { payload } = action;
            let isError = false;
            const SvToForm = {
                id: payload.id,
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
            }
            const index = findIndexSv(state.listSv, SvToForm.id)
            if (index !== -1) {
                state.validMessage = "Mã SV đã tồn tại";
                isError = true;

            }
            if (isError) {
                return
            }
            const newListSv = [...state.listSv, SvToForm]
            state.listSv = newListSv;
            state.validMessage = "";
            // Luu vao storage sau khi add SV 
            localStorage.setItem("listSv", JSON.stringify(state.listSv));


        },
        setRemove: (state, action) => {
            const { payload } = action;
            const newListSv = state.listSv.filter((item) => item.id !== payload)
            state.listSv = newListSv;

            // cap nhat lai danh sach sau khi xoa SV 
            localStorage.setItem("listSv", JSON.stringify(newListSv));

        },
        setEdit: (state, action) => {
            const { payload } = action;
            // console.log(payload);
            state.detailSv = payload;
        },
        setUpdate: (state, action) => {
            const { payload } = action;
            console.log(payload);
            // Tìm index SV cần update
            const index = findIndexSv(state.listSv, payload.id);
            if (index !== -1) {
                // Ghi đè lại thông tin SV
                state.listSv[index] = payload;
            }
            // Cập nhật localStorage
            localStorage.setItem("listSv", JSON.stringify(state.listSv));
        },
    }
})

export const { handleOnChangeRedux, submit, setEdit, setAddSv, setRemove, setUpdate } = formValidReducer.actions;

export default formValidReducer.reducer;


