<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function dailyVisits() {
        return DB::select("
            select date(created_at) AS date, count(id) AS count
            from visits
            WHERE date(created_at) >= DATE_SUB(NOW(), INTERVAL 8 DAY)
            GROUP BY date(created_at)
            ORDER BY date
            ");
    }

    public function allpets() {
        return DB::select("
            select species, count(id) as count
            from pets
            GROUP BY species
            ");
    }

    public function visitReport() {
        return DB::select("
            select date(created_at) AS date, count(id) AS count, sum(price) AS sum
            from visits
            WHERE date(created_at) >= DATE_SUB(NOW(), INTERVAL 8 DAY)
            GROUP BY date(created_at)
            ORDER BY date
            ");
    }

    public function newclients() {
        return DB::select("
            select date(created_at) AS date, count(id) AS count
            from owners
            WHERE date(created_at) >= DATE_SUB(NOW(), INTERVAL 8 DAY)
            GROUP BY date(created_at)
            ORDER BY date
            ");
    }

    public function popularmanipulations() {
        // return DB::select("
        // (SELECT
        // count(manipulation_id), manipulations.name
        // from used_manipulations
        // INNER JOIN manipulations
        // ON used_manipulations.manipulation_id = manipulations.id
        // GROUP BY manipulation_id
        // LIMIT 18446744073709551610 OFFSET 5)
        // UNION
        // (SELECT
        // count(manipulation_id), manipulations.name
        // from used_manipulations
        // INNER JOIN manipulations
        // ON used_manipulations.manipulation_id = manipulations.id
        // GROUP BY manipulation_id
        // LIMIT 5)
        // ORDER BY 1 DESC
        // ");

        return DB::select("
        SELECT
        count(manipulation_id) AS count, manipulations.name
        from used_manipulations
        INNER JOIN manipulations
        ON used_manipulations.manipulation_id = manipulations.id
        GROUP BY manipulation_id, manipulations.name
        ORDER BY count DESC
        LIMIT 7
        ");
    }
}
