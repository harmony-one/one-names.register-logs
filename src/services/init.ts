import { databaseService, DBService } from './database';
import { RegistrationService } from './registrations';

export interface IServices {
  registrations: RegistrationService;
  database: DBService;
}

export const InitServices = async (): Promise<IServices> => {
  const registrations = new RegistrationService({ database: databaseService });

  return {
    registrations,
    database: databaseService,
  };
};
