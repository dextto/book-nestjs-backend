export abstract class CqrsEvent {
  constructor(readonly name: string) { }
}