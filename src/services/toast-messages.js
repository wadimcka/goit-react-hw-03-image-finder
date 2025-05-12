import { toast } from 'react-toastify';
import { MESSAGES } from 'constants';

export const notify = {
  noResults: query => toast.info(MESSAGES.noResults(query)),
  success: total => toast.success(MESSAGES.successResults(total)),
  error: message => toast.error(MESSAGES.error(message)),
  rest: remaining => toast.info(MESSAGES.rest(remaining)),
};
