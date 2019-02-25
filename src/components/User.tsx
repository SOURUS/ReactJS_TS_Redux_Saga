import * as React from 'react'
import { connect } from 'react-redux';

import { UserModel } from '../models';
import UserTask from './UserTask';
import { requestGetUsers } from '../actions';

interface Props {
    users: any;
    getUsers: typeof requestGetUsers;
}

class User extends React.Component<Props> {
    componentDidMount() {
        //this.props.getUsers();
    }

    render() {
        const { users } = this.props;

        if (!users) {
            return <div>Loading...</div>;
        }

        if (users.length === 0) {
            return <div>There is no Data</div>;
        }

        if (users.users) {
            return users.users.map((u: UserModel) => {
                return (
                    <div className="item" key={u.userId}>
                        <i className="user" />
                        <div className="content">
                            <div className="description">
                                <h2>{u.firstname} {u.lastname}</h2>
                            </div>
                            <ul>
                                <UserTask tasks={u.tasks} />
                            </ul>
                        </div>
                    </div>
                );
            });
        }
    }
}

const mapStateToProps = (state: any) => {
    return { users: state.users }
}

export default connect(mapStateToProps, { requestGetUsers })(User);