import { ProjectSettingsService } from 'src/services/project-settings.service';
export declare class ProjectSettingsController {
    private readonly projectSettingsService;
    constructor(projectSettingsService: ProjectSettingsService);
    getAllCountries(): Promise<string[]>;
}
