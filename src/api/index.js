import { get, post } from '@/axios'
const BASE_URL = "/"

// 获取组织机构根节点
export const GET_DEPT_ROOT = () => get( BASE_URL + 'api/departments/info' )

// 根据部门id获取分页人员信息 搜索用户信息
export const GET_PAGE_EMPLOYEE = data => get( BASE_URL + 'api/users/info', data )

// 获取分组信息
export const GET_APPROVAL_GROUP = data => get( BASE_URL + 'api/users/info?tag=fenzhu', data )

// 获取分组信息
export const GET_ICON_LIST = data => get( BASE_URL + 'api/users/info?tag=icons', data )

// 获取组织机构子节点
export const GET_DEPT_TREE = data => get( BASE_URL + 'api/departments/info', data )

// 获取组织机构下人员信息
export const GET_USER_BY_DEPT = data => get( BASE_URL + 'api/jobs/info', data )


// 获取角色
export const GET_ROLE_RECORD = data => get( BASE_URL + 'api/users/info?tag=role', data )

// 获取岗位
export const GET_POSITION_RECORD = data => get( BASE_URL + 'api/users/info?tag=position', data )

// 获取流程数据
export const GET_APPROVAL_CONF =  data =>  get(BASE_URL + 'api/v1/approver_config',data)

// 获取流程数据
export const POST_APPROVAL_CONF =  data =>  post(BASE_URL + 'api/v1/approver_config',data)