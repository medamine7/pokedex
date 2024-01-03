import { InjectionKey } from 'vue';
import { createRepository } from '~/repository/factory';

export const ApiKey: InjectionKey<ReturnType<typeof createRepository>> = Symbol('Api');