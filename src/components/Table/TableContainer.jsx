import { connect } from 'react-redux';
import Table from './Table';
import {requestUsers, onPageChanged,onChangePageSize,onSortID, onSortFirstName,onSortLastName,onSortEmail,onSortPhone,setSearchString} from '../../Redux/table-reducer';

let mapStateToProps = (state) => ({
    Users : state.tableList.users,
    isFetching : state.tableList.isFetching,
    totalUsersCount : state.tableList.totalUsersCount,
    pageSize : state.tableList.pageSize,
    currentPage : state.tableList.currentPage,
    sort : state.tableList.sort,
    searchString : state.tableList.searchString
}) 

export default connect(mapStateToProps, {
    setSearchString,
    onSortID,
    onSortFirstName,
    onSortLastName,
    onSortEmail,
    onSortPhone,
    requestUsers,
    onPageChanged,
    onChangePageSize
})(Table);