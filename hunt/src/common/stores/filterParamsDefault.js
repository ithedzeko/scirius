import store from 'store';
import moment from 'moment';

const storedStamp = store.get('timespan');

export const absolute = {
    from: {
        id: 0,
        value: 0,
        time: moment(),
        now: false,
    },
    to: {
        id: 0,
        value: 0,
        time: moment(),
        now: false,
    },
};

const timespan = storedStamp || {
    duration: 0,
    fromDate: parseInt((Date.now() - (24 * 3600 * 1000)) / 1000, 10),
    toDate: parseInt(Date.now() / 1000, 10),
    absolute,
};
if (storedStamp) {
    timespan.absolute.from.time = moment(timespan.absolute.from.time);
    timespan.absolute.to.time = moment(timespan.absolute.to.time);
}

export const defaultFilterParams = {
    hash: '',
    ...timespan,
};
