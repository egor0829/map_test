import React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';

import {ILocationsStore, IUserStore} from 'types/types';
import {IPremises} from 'types/premises.types';

interface Props {
  // stage: 'data-loaded' | 'error' | 'complete' | '';
  // status?: 'Загружаем данные' | 'Загружаем карту' | 'Ошибка при получении данных';
  locationsStore: ILocationsStore;
  userStore: IUserStore;
  types: IPremises[];
}

class Loader extends React.Component<Props, {}>{
  render(){
    const {userStore, locationsStore} = this.props;

    let status = 'Загрузка';
    let stage = '';

    if (userStore.isLoading || locationsStore.isLoading) {
      status = 'Загружаем данные';
    }

    if (!userStore.isLoading && userStore.data && !locationsStore.isLoading && locationsStore.data) {
      status = 'Загружаем карту';
      stage = 'data-loaded';
    }

    if (userStore.error || locationsStore.error) {
      status = 'Ошибка при получении данных'
      stage = 'error';
    }

    return (
      !userStore.data || !locationsStore.data ?
        // Индикатор, показывающий, что карта загружается
        <div id="loaderMap" className="loader-map">
            <div className={cn({
              "loader-map__indicator": true,
              [`loader-map__${stage}`]: stage
            })}></div>
            <p className="loader-map__status">{status}</p>
        </div> :
        null
    );
  }
}

function mapStateToProps(state) {
  return {
    locationsStore: state.locationsStore,
    userStore: state.userStore,
    types: state.typesStore,
    allData: state.allDataStore,
  }
}

export default connect(mapStateToProps, null)(Loader);
