import {
  Column, Entity, PrimaryGeneratedColumn, BaseEntity,
} from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  github: string;

  @Column('varchar', { array: true })
  tags: string[];

  @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
