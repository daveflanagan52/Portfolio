import {
  Column, Entity, PrimaryGeneratedColumn, BaseEntity,
} from 'typeorm';

  @Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column({ type: 'timestamp', nullable: true })
    takenAt: Date;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
