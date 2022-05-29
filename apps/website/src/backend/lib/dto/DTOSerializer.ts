import superjson from 'superjson';
import type { IDTO } from '@/backend/lib/dto/DTO';

export class DTOSerializer {
  stringify<T extends IDTO>(dto: T): string {
    return superjson.stringify(dto);
  }
  parse<T extends IDTO = IDTO>(str: string): T {
    return superjson.parse(str);
  }
}
