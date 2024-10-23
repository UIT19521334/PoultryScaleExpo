import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from './store'



export type IGlobalState = {
	darkMode: boolean
	user: any
	profile: any
	loading: boolean
	loadingLogin: boolean
	message: string
	status: string
	dialog: {
		type: 'success' | 'error' | 'hide'
		message: string
	}
	baseUrl: string
}

const initialState: IGlobalState = {
	darkMode: false,
	user: {},
	profile: {},
	loading: false,
	loadingLogin: false,
	message: '',
	status: '',
	dialog: {
		type: 'success',
		message: '',
	},
	baseUrl: 'https://supplysouth.japfa.com.vn:62150/api/',
}

const globalSlice = createSlice({
	name: 'global',
	initialState: initialState,
	reducers: {
		toggleColorScheme: state => {
			state.darkMode = !state.darkMode
		},
		updateUser: (state, action) => {
			state.user = action.payload
		},
		loadingGlobal: (state, action) => {
			state.loading = action.payload
		},
		loadingLogin: (state, action) => {
			state.loadingLogin = action.payload
		},
		updateProfile: (state, action) => {
			state.profile = action.payload
		},
		updateProfileRole: (state, action) => {
			state.profile.Role = action.payload
		},

		closeDialogError: state => {
			state.dialog.type = 'hide'
			state.dialog.message = ''
		},
		openDialogError: (state, action) => {
			state.dialog.type = 'error'
			state.dialog.message = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(signIn.pending, state => {
				state.loadingLogin = true
				state.status = 'pending'
			})
			.addCase(signIn.fulfilled, (state, action: PayloadAction<any>) => {
				state.user = action.payload
				state.loadingLogin = false
				state.status = 'success'
				state.message = 'Login success'
			})
			.addCase(signIn.rejected, (state, action) => {
				state.loadingLogin = false
				state.dialog.type = 'error'
				state.dialog.message = action.error.message ? action.error.message : 'Login failed'
				console.log('SignIn ERROR', action.error.message)
			})
	},
})

export default globalSlice

export const {
	toggleColorScheme,
	updateUser,
	loadingGlobal,
	loadingLogin,
	updateProfile,
	closeDialogError,
	openDialogError,
	updateProfileRole,
} = globalSlice.actions

export const signIn = createAsyncThunk('global/signIn', async (userToken: string, thunkAPI) => {
	// 0. Login with userToken
	// // const user_info: any = await jwtDecode(userToken)
	// const email = user_info.upn
	// console.log('email', email)

	// // 1. Get user profile by email
	// const storedProfile = await storage.getString('profile')
	// let profile

	// if (!storedProfile) {
	// 	profile = await getUserProfile(email)
	// 	storage.set('profile', JSON.stringify(profile))
	// } else {
	// 	profile = JSON.parse(storedProfile)
	// }

	// thunkAPI.dispatch(updateProfile(profile))

	// // 2. Set permission
	// const permission = setPermissions(profile.Role)
	// thunkAPI.dispatch(updatePermission(permission))

	// // 3. Get factory access of user
	// const storedSubDivisionList = await storage.getString('subDivisionList')
	// let subDivisionList

	// if (!storedSubDivisionList) {
	// 	const factories: any = await getFactoriesAccessOfUser(email)
	// 	subDivisionList = convertToSubDivisionList(factories)
	// 	storage.set('subDivisionList', JSON.stringify(subDivisionList))
	// } else {
	// 	subDivisionList = JSON.parse(storedSubDivisionList)
	// }
	// thunkAPI.dispatch(updateSubDivisionList(subDivisionList))

	// // 4. Get menu access of user
	// const storedMenuList = await storage.getString('menuList')
	// let menuList

	// if (!storedMenuList) {
	// 	const menu: any = await getMenuAccessOfUser(email)
	// 	menuList = convertToGroupedList(menu)
	// 	storage.set('menuList', JSON.stringify(menuList))
	// } else {
	// 	menuList = JSON.parse(storedMenuList)
	// }
	// thunkAPI.dispatch(updateMenuList(menuList))
	// // storage.set('settingsMenu', 'admin')
	// // storage.set('menuList', JSON.stringify(AdminMenu))
	// // thunkAPI.dispatch(updateMenuList(AdminMenu))
	

	// // 5. Get unit
	// const storedUnit = await storage.getString('unitList')
	// let unit
	// if (!storedUnit) {
	// 	unit = await getUnitList()
	// 	storage.set('unitList', JSON.stringify(unit))
	// } else {
	// 	unit = JSON.parse(storedUnit)
	// }
	// thunkAPI.dispatch(updateUnitList(unit))

	// // 6. Get history
	// let histories = await storage.getString('histories')

	// if (histories) {
	// 	histories = JSON.parse(histories)
	// 	thunkAPI.dispatch(updateHistories(histories))
	// }

	// // 7. Get suppliers
	// const storedSuppliers = await storage.getString('suppliers')
	// let suppliers
	// if (!storedSuppliers) {
	// 	suppliers = await getSuppliers()
	// 	storage.set('suppliers', JSON.stringify(suppliers))
	// } else {
	// 	suppliers = JSON.parse(storedSuppliers)
	// }
	// const activeSuppliers = filter(suppliers, { ACTIVE: 'Y' })
	// thunkAPI.dispatch(updateSuppliers(activeSuppliers))

	// return user_info
})

export function signOut() {
	//thunk function - action
	// return function signOutThunk(dispatch: AppDispatch) {
	// 	storage.clearAll()
	// 	dispatch(updateUser({}))
	// }
}
