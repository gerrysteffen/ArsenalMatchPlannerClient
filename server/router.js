import Router from '@koa/router';
import { getMatches } from './controllers/matches.js';
import {
  createTicket,
  deleteTicket,
  getTickets,
  updateTicket,
} from './controllers/tickets.js';
import { createUser, getUsers } from './controllers/user.js';

const router = Router();

router.get('/matches', getMatches);
router.get('/tickets', getTickets);
router.post('/tickets', createTicket);
router.put('/tickets', updateTicket);
router.delete('/tickets', deleteTicket);
router.get('/users', getUsers);
router.post('/users', createUser);

export default router;
