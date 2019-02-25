import * as React from 'react'
import { connect } from 'react-redux';
import { TaskModel } from '../models';

export interface Props {
    tasks?: TaskModel[];
}

class UserTask extends React.Component<Props, {}> {

    render() {
        const { tasks } = this.props;

        if (!tasks) {
            return <div>Loading...</div>;
        }

        return tasks.map((t: TaskModel) => {
            return (
                <li>
                    <div className="item" key={t.id}>
                        <i className="large" />
                        <div className="content">
                            <h3>{t.title}</h3>
                            <div className="description">
                                <p>{t.description}</p>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }
}

const mapStateToProps = ({ value }: any) => {
    return value;
    //return { tasks: state.users.filter((user: any) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserTask);