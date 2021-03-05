import React from 'react';
import './Table.css';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import Search from '../Search/Search';

let CitiesList = (props) => { 
    let onSearchClick = () => {
        props.requestUsers();
    }
    let addClassSort = (colName) => {
        if (((props.sort ==='IDup')||(props.sort ==='FirstNameup')||(props.sort ==='LastNameup')||(props.sort ==='Emailup')||(props.sort ==='Phoneup')) && (props.sort ===`${colName}up`)) {
            return 'SortUp'
        } else if (((props.sort ==='IDdown')||(props.sort ==='FirstNamedown')||(props.sort ==='LastNamedown')||(props.sort ==='Emaildown')||(props.sort ==='Phonedown'))&& (props.sort ===`${colName}down`)){
            return 'SortDown'
        }
    }
    let users = props.Users.filter(user =>  ((String(user.id).indexOf(props.searchString)!=-1)||(String(user.firstName).indexOf(props.searchString)!=-1)||(String(user.lastName).indexOf(props.searchString)!=-1)||(String(user.email).indexOf(props.searchString)!=-1)||(String(user.phone).indexOf(props.searchString)!=-1)))
    return <div>
        {props.isFetching ? <Preloader/> : <button onClick={onSearchClick}>Запросить пользователей</button>}
        
        { props.Users.length >0 ? <div className={'PageSizeBtnWrapper'}>
            <div className={(props.pageSize ==10)? 'PageSizeBtn Active' : 'PageSizeBtn'} onClick={() =>{props.onChangePageSize(10)}}>10</div>
            <div className={(props.pageSize ==20)? 'PageSizeBtn Active' : 'PageSizeBtn'} onClick={() =>{props.onChangePageSize(20)}}>20</div>
            <div className={(props.pageSize ==50)? 'PageSizeBtn Active' : 'PageSizeBtn'} onClick={() =>{props.onChangePageSize(50)}}>50</div>
        </div> : null} 
        { props.Users.length >0 ?<Search setSearchString={props.setSearchString}/>: null}
        { props.Users.length >0 ? <tabel>
            <thead>
                <tr>
                    <th onClick={props.onSortID} className={addClassSort('ID')}>ID</th>
                    <th onClick={props.onSortFirstName} className={addClassSort('FirstName')}>FirstName</th>
                    <th onClick={props.onSortLastName} className={addClassSort('LastName')}>LastName</th>
                    <th onClick={props.onSortEmail} className={addClassSort('Email')}>Email</th>
                    <th onClick={props.onSortPhone} className={addClassSort('Phone')}>Phone</th>
                </tr>
            </thead>
            <tbody>
        {users.map((user,i) => { if (((((props.currentPage-1)*props.pageSize)<=i)&&(i<props.currentPage*props.pageSize))){{
            return <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>
        } }
        })}
        </tbody>
        </tabel> : null}
        {props.Users.length >0 ?<Paginator totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} pageSize={props.pageSize} onPageChanged={props.onPageChanged}/> : null}
    </div>}

export default CitiesList;